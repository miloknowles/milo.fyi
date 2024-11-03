import panflute as pf

def action(elem, doc):
  global _inside_eqn

  print(elem)

  if isinstance(elem, pf.Header):
    # if elem.level == 1:
    #   elem.classes.append("rt-Heading rt-r-size-9 rt-r-weight-bold pt-2")
    # elif elem.level == 2:
    #   elem.classes.append("rt-Heading rt-r-size-8 rt-r-weight-bold pt-2")
    # elif elem.level == 3:
    #   elem.classes.append("rt-Heading rt-r-size-7 rt-r-weight-bold pt-2")
    # elif elem.level == 4:
    #   elem.classes.append("rt-Heading rt-r-size-6 rt-r-weight-bold pt-2")
    # elif elem.level == 5:
    #   elem.classes.append("rt-Heading rt-r-size-6 rt-r-weight-bold pt-2")
    if elem.level == 1:
      elem.classes.append("blog-heading blog-h1")
    elif elem.level == 2:
      elem.classes.append("blog-heading blog-h2")
    elif elem.level == 3:
      elem.classes.append("blog-heading blog-h3")
    elif elem.level == 4:
      elem.classes.append("blog-heading blog-h4")
    elif elem.level == 5:
      elem.classes.append("blog-heading blog-h5")

  # if isinstance(elem, pf.Para):
  #   elem.classes.append("blog-p")

  if isinstance(elem, pf.Link):
    elem.classes.append("blog-link")

  if isinstance(elem, pf.Strong):
    elem.classes.append("blog-strong")

  if isinstance(elem, pf.Emph):
    elem.classes.append("blog-emph")

  if isinstance(elem, pf.Code):
    elem.classes.append("blog-code")

  if isinstance(elem, pf.CodeBlock):
    elem.classes.append("blog-code-block")

  if isinstance(elem, pf.BulletList):
    elem.classes.append("blog-bullet-list")

  if isinstance(elem, pf.OrderedList):
    elem.classes.append("blog-ordered-list")
  
  # if isinstance(elem, pf.ListItem):
  #   elem.classes.append("blog-list-item")
  
  if isinstance(elem, pf.Image):
    elem.classes.append("blog-image")
  
  if isinstance(elem, pf.BlockQuote):
    elem.classes.append("blog-blockquote")

  if isinstance(elem, pf.Table):
    elem.classes.append("blog-table")
  
  if isinstance(elem, pf.TableCell):
    elem.classes.append("blog-table-cell")

  if isinstance(elem, pf.TableRow):
    elem.classes.append("blog-table-row")

  if isinstance(elem, pf.Div):
    elem.classes.append("blog-div")

  if isinstance(elem, pf.HorizontalRule):
    elem.classes.append("blog-hr")

  #   # Adding the `rt-Link` class will make the link use the highlight color.
  #   elem.content.insert(0, pf.RawInline('{" "}', format='html'))
  #   elem.content.append(pf.RawInline('{" "}', format='html'))
  #   elem.classes.append("rt-Text rt-reset rt-underline-auto")

  # if isinstance(elem, pf.Emph):
  #   elem.content.insert(0, pf.RawInline('{" "}', format='html'))
  #   elem.content.append(pf.RawInline('{" "}', format='html'))

def main(doc=None):
  return pf.run_filter(action, doc=doc)

if __name__ == '__main__':
  main()