module.exports = {
  disableEmoji: false,
  breakingChangePrefix: '🧨 ',
  list: [
    "Add",
    "Fix",
    "Improve",
    "Update",
    "Remove",
    "Rename",
    "Move",
    "Change",
    "Release",
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    "type",
    "scope",
    "subject",
    "body",
    "lerna"
  ],
  scopes: [],
  types: {
    Add: {
      description: "（機能・ファイルなどを）追加する",
      emoji: '➕',
      value: "Add"
    },
    Fix: {
      description: "（コードなどを）修正する",
      emoji: '👻',
      value: "Fix"
    },
    Improve: {
      description: "（コードなどを）改善する",
      emoji: '⚡️',
      value: "Improve"
    },
    Update: {
      description: "（パッケージやドキュメントなどを）更新する",
      emoji: '🎉',
      value: "Update"
    },
    Remove: {
      description: "（ファイル名やコードを）除去する",
      emoji: '❌',
      value: "Remove"
    },
    Rename: {
      description: "（ファイル名を）変更する",
      emoji: '🎸',
      value: "Rename"
    },
    Move: {
      description: "（AをBに）移動する",
      emoji: '🔀',
      value: "Move"
    },
    Change: {
      description: "（AをBに）変更する",
      emoji: '💡',
      value: "Change"
    },
    Release: {
      description: "リリース用コミット",
      emoji: '🏹',
      value: "Release"
    },
  }
};
