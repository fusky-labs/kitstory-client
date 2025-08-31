# What da hail are modifiers?

Extending the Markdown syntax, modifiers are special inline blocks that allow a certain type of medium to be formatted in a specific way; think LaTeX for writing literatures and script writing.

Modifiers are denoted with the `<# ... #>` syntax, directly borrowed from PowerShell scripting language - which allows you to have a multi-line comment. In Kitstory, they act differently and is mainly used as a narrative or expression marker in a single character block.


Built-in modifiers:

- `<# continue #>` / `<# pause #>`
- `<# whisper #>`
- `<# think #>`
- `<# shout #>` / `<# yell #>`

## Example

```
There's no way that's real.<# pause #>How is *that* possible?
```

Output on writing/literature mode:

> "There's no way that's real." Kinter continues, "How is \<em\>that\</em\> possible?"

Output on msg/chat message/roleplay mode:

> There's no way that's real. *Kinter pauses* How is *that* possible?

Output JSON response:

```json
{
  "id": "57dc1b5a-8ea3-4325-9ef6-9e85d8cb6138",
  "block_type": "character",
  "character": {
    "name": "Kinter",
    "full_name": "Kinter Wolfe Atwood",
    "details": "https://kitstory.dev/v1/backstage/{{workspace_id}}/character/kinter"
  },
  "text_parsed": "There's no way that's real. How is that possible?",
  "text_raw": "There's no way that's real.<# continue #>How is that possible?",
  "text_nodes": [
    {
      "node_type": "text",
      "text": "There's no way that's real.",
      "format": [],
    },
    {
      "node_type": "modifier",
      "modifier": "continue",
      "syntax": { 
        "literature": "Kinter continues",
        "chat": "*Kinter pauses*",
        "screenplay": "(continuing)",
      },
      "terminators": [",", "."]
    },
    {
      "node_type": "text"
      "text": "How is ",
      "format": [],
    },
    {
      "node_type": "text"
      "text": "that",
      "format": ["italic"],
    },
    {
      "node_type": "text"
      "text": " possible?",
      "format": [],
    },
  ]
}
```
