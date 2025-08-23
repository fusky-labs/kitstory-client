# What da hail are modifiers?

Modifiers are special blocks that allow a certain type of medium to be formatted in a specific way; think LaTeX for writing literatures and script writing

Modifiers are denoted with the `<# ... #>` syntax, directly borrowed from PowerShell scripting language - which allows you to have a multi-line comment, but modifiers on Kitstory doesn't allow such thing

Built-in modifiers:
- `<# prose continue #>`
- `<# cue pause #>`

## Types of Modifiers

Built-in modifiers start with `prose` and `cue`. Custom modifiers are aliased to whatever, as long as it doesn't include whitespaces

## Example

```
There's no way that's real.<# prose continue #>How is *that* possible?
```

Output on writing mode:

> "There's no way that's real." Kinter continues, "How is <em>that</em> possible?"

Output on msg/chat message/roleplay mode:


> There's no way that's real. *Kinter pauses* How is *that* possible?

```
There's no way that's real. *Kinter pauses* How is *that* possible?
```

Output JSON:
```json
{
  "character": "Kinter",
  "id": "57dc1b5a-8ea3-4325-9ef6-9e85d8cb6138",
  "block_type": "character",
  "text_parsed": "There's no way that's real. How is that possible?",
  "text_raw": "There's no way that's real.<#prose continue#>How is that possible?",
  "text_nodes": [
    {
      "node_type": "plain_text",
      "text": "There's no way that's real.",
      "format": [],
    },
    {
      "node_type": "modifier",
      "modifier_type": "prose",
      "modifier_syntax": "%name|pronoun% continues",
      "terminators": [",", "."]
    }
    {
      "node_type": "plain_text"
      "text": "How is ",
      "format": [],
    },
    {
      "node_type": "plain_text"
      "text": "that",
      "format": ["italic"],
    },
    {
      "node_type": "plain_text"
      "text": " possible?",
      "format": [],
    },
  ]
}
```
