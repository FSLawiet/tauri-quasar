#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::{Manager, SystemTray, SystemTrayEvent, SystemTrayMenu};

#[tauri::command]
async fn close_splashscreen(window: tauri::Window) {
  // Close splashscreen
  if let Some(splashscreen) = window.get_window("splashscreen") {
    splashscreen.close().unwrap();
  }
  // Show main window
  window.get_window("main").unwrap().show().unwrap();
}

fn main() {
  let system_tray_menu = SystemTrayMenu::new();
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![close_splashscreen])
    .system_tray(SystemTray::new().with_menu(system_tray_menu))
    .on_system_tray_event(|app, event| match event {
      SystemTrayEvent::LeftClick {
          position: _,
          size: _,
          ..
      } => {
          let window = app.get_window("main").unwrap();
          // toggle application window
          if window.is_visible().unwrap() {
              window.hide().unwrap();
          } else {
              window.show().unwrap();
              window.set_focus().unwrap();
          }
      },
      _ => {}
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
