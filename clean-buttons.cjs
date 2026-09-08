const fs = require('fs')

function walk(dir) {
  let results = []
  const list = fs.readdirSync(dir)
  list.forEach(function (file) {
    file = dir + '/' + file
    const stat = fs.statSync(file)
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file))
    } else {
      if (file.endsWith('.tsx')) results.push(file)
    }
  })
  return results
}

const files = walk('./src')
files.forEach((f) => {
  let content = fs.readFileSync(f, 'utf-8')
  let original = content

  // This regex looks for Button tags and removes custom padding/text sizes
  // that might conflict with the base button component.
  content = content.replace(
    /(<Button[^>]*className=["'])([^"']*)(["'])/g,
    (match, p1, p2, p3) => {
      let classes = p2.split(' ')

      let shouldUpgradeToXL = classes.some(
        (c) => c.includes('px-6') || c.includes('px-8') || c.includes('py-6'),
      )

      // Remove hardcoded standard paddings and text sizes
      classes = classes.filter((c) => {
        if (c.match(/^p[xy]-/)) return false
        if (c.match(/^md:p[xy]-/)) return false
        if (c.match(/^sm:p[xy]-/)) return false
        if (c.match(/^lg:p[xy]-/)) return false
        if (c.match(/^text-(xs|sm|base|lg|xl)/)) return false
        if (c.match(/^sm:text-(xs|sm|base|lg|xl)/)) return false
        if (c.match(/^md:text-(xs|sm|base|lg|xl)/)) return false
        return true
      })

      // We clean up extra spaces
      let newClassName = classes.join(' ').replace(/\s+/g, ' ').trim()
      return `${p1}${newClassName}${p3}`
    },
  )

  // We also upgrade `size="lg"` to `size="xl"` if it's a huge CTA button and was originally heavily padded
  // But honestly, just leaving size="lg" is probably fine since we updated `lg` to be decent.
  // Wait, let's just let the script remove custom paddings from Button classNames.

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf-8')
    console.log('Cleaned buttons in:', f)
  }
})
