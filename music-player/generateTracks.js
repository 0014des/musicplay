const fs = require('fs');
const path = require('path');

// 1. musicフォルダのパス
const musicDir = path.join(__dirname, 'music');

// 2. 音楽ファイルを取得（mp3, wav, oggのみ）
const files = fs.readdirSync(musicDir).filter(file =>
  file.endsWith('.mp3') || file.endsWith('.wav') || file.endsWith('.ogg')
);

// 3. tracks配列を生成
const tracks = files.map(file => ({
  title: path.parse(file).name,
  file: `music/${file}`
}));

// 4. 出力
console.log('以下を script.js に貼り付けてください:\n');
console.log('const tracks = ' + JSON.stringify(tracks, null, 2) + ';');
