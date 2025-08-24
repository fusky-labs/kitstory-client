use tauri_plugin_positioner::{WindowExt, Position};
// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_positioner::init())
        .setup(|app| {
            // note that this will create a new TrayIcon
            TrayIconBuilder::new()
                .on_tray_icon_event(|app, event| {
                    tauri_plugin_positioner::on_tray_event(app.app_handle(), &event);
                })
                .build(app)?;

            let mut win = app.get_window("main").unwrap();
            let _ = win.move_window(Position::Center);

            Ok(())
        })
        .plugin(tauri_plugin_clipboard_manager::init())
        .plugin(tauri_plugin_notification::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_opener::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
