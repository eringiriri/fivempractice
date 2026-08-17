const OWN_SITES = [
    {
        name: 'Color Hack',
        desc: 'アイコンの色を記憶して当てる',
        url: 'https://colorhack.eringi.me',
        github: 'https://github.com/eringiriri/colorhack',
    },
    {
        name: 'VLSI Circuit Breaker 2.0',
        desc: '回路をつなぐタイプ',
        url: 'https://circuit.breaker.eringi.me',
        github: 'https://github.com/eringiriri/vlsicircuitbreaker',
    },
    {
        name: 'VOLTLAB',
        desc: '軍事基地襲撃用',
        url: 'https://voltlab.eringi.me',
        github: 'https://github.com/eringiriri/VOLTLAB',
    },
    {
        name: 'Lights Out',
        desc: 'Lights Outパズル(4×4〜8×8まで設定可)',
        url: 'https://lightsout.eringi.me',
        github: 'https://github.com/eringiriri/lightsout',
    },
    {
        name: 'Caruta',
        desc: '6×4のペア当て(制限時間60秒)',
        url: 'https://caruta.eringi.me',
        github: 'https://github.com/eringiriri/caruta',
    },
    {
        name: 'Fingerprint Scanner',
        desc: '指紋認証スキャナー(本番モードあり)',
        url: 'https://fingerprint.eringi.me',
        github: 'https://github.com/eringiriri/fingerprint',
    },
    {
        name: 'Memory Grid',
        desc: '配置記憶ゲーム(設定変更可)',
        url: 'https://memorygrid.eringi.me',
        github: 'https://github.com/eringiriri/memorygrid',
    },
    {
        name: 'Code Crack',
        desc: '数字当てゲーム(緑/黄/赤で判定)',
        url: 'https://codecrack.eringi.me',
        github: 'https://github.com/eringiriri/codecrack',
    },
    {
        name: 'Nummeiro',
        desc: '数字の数だけ右/下へジャンプして繋ぐ(発電機ハッキング系)',
        url: 'https://nummeiro.eringi.me',
        github: 'https://github.com/eringiriri/nummeiro',
    },
];

const OTHER_SITES = [
    // { name: '', desc: '', url: '', author: '', github: '' },
];

function renderGrid(elementId, sites) {
    const grid = document.getElementById(elementId);

    if (sites.length === 0) {
        grid.innerHTML = '<div class="empty">近日追加予定</div>';
        return;
    }

    grid.innerHTML = sites.map((site, index) => `
        <div class="card">
            <a class="card-link" href="${site.url}" target="_blank" rel="noopener">
                <div class="name"><span class="number">${index + 1}</span>${site.name}</div>
                ${site.desc ? `<div class="desc">${site.desc}</div>` : ''}
                <div class="url">${site.url.replace(/^https?:\/\//, '')}</div>
                ${site.author ? `<div class="author">by ${site.author}</div>` : ''}
            </a>
            ${site.github ? `<a class="gh-link" href="${site.github}" target="_blank" rel="noopener">GitHub ↗</a>` : ''}
        </div>
    `).join('');
}

renderGrid('ownGrid', OWN_SITES);
renderGrid('otherGrid', OTHER_SITES);
