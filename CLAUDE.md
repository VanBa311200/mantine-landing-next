@AGENTS.md

## Local working rules
- Ưu tiên MCP-first cho mọi tác vụ; chỉ fallback sang CLI/tool mặc định khi MCP không khả dụng.
- Git/GitHub: dùng GitHub MCP cho PR, issue, review/comment, branch/file/release/search; chỉ dùng `gh` khi không có MCP tương ứng.
- Code intelligence/refactor: dùng Serena MCP theo hướng symbol-first (`get_symbols_overview`/`find_symbol`/`find_referencing_symbols`/`rename_symbol`/`replace_symbol_body`).
- Tránh đọc full file khi chưa cần; ưu tiên thao tác symbolic của Serena, chỉ fallback `Read`/`Grep`/`Glob`/`Edit` khi thật sự cần.
