const OWN_SITES = [
    {
        name: 'Color Hack',
        desc: 'アイコンの色を記憶して当てるハッキングミニゲームの練習サイト',
        url: 'https://colorhack.eringi.me',
    },
    {
        name: 'VLSI Circuit Breaker 2.0',
        desc: '回路をつなぐタイプのハッキングミニゲームの練習サイト',
        url: 'https://circuit.breaker.eringi.me',
    },
    {
        name: 'VOLTLAB',
        desc: 'VOLTLABハッキングミニゲームの練習サイト',
        url: 'https://voltlab.eringi.me',
    },
];

const OTHER_SITES = [
    // { name: '', desc: '', url: '', author: '' },
];

function renderGrid(elementId, sites) {
    const grid = document.getElementById(elementId);

    if (sites.length === 0) {
        grid.innerHTML = '<div class="empty">近日追加予定</div>';
        return;
    }

    grid.innerHTML = sites.map((site) => `
        <a class="card" href="${site.url}" target="_blank" rel="noopener">
            <div class="name">${site.name}</div>
            <div class="desc">${site.desc}</div>
            <div class="url">${site.url.replace(/^https?:\/\//, '')}</div>
            ${site.author ? `<div class="author">by ${site.author}</div>` : ''}
        </a>
    `).join('');
}

renderGrid('ownGrid', OWN_SITES);
renderGrid('otherGrid', OTHER_SITES);
