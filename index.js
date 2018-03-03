const username = 'sinchang'

window.onload = function() {
  fetch(`https://api.npms.io/v2/search?q=+author:${username}`).then(res => {
      return res.json()
    }).then(results => {
      let tpl = ''

      results.results.forEach(result => {
        const packageName = result.package.name

        tpl += `
          <tr>
            <th><a href="${result.package.links.repository}" target="_blank">${result.package.name}</a></th>
            <th>
              <a href="https://npmjs.org/package/${packageName}">
                <img src="https://img.shields.io/npm/dm/${packageName}.svg?style=flat-square">
              </a>
            </th>
          </tr>
        `
      })

      document.getElementById('tbody').innerHTML = tpl
    })
}