function onOpen(e) {
  DocumentApp.getUi().createAddonMenu()
      .addItem('Gengo it!', 'gengo')
      .addToUi();
}


function gengo() {
//  
  //we need to change a bunch of html tags into a form where gengo can separate what's to translate and what's to ignore. Remembering that triple brackets
  // is the way gengo distinguishes the content. So this add-on will help you switch that at once
  // keep in mind that sometimes it doesn't get all things correct so if in the end you press ctrl-f and search for
  // "[[[" and later "]]]" there might be a different number, and so far the only way to fix it is by checking one by one

  var body = DocumentApp.getActiveDocument().getBody();
  
  body.replaceText('<h2>','[[[<h2>]]]');
  body.replaceText('</h2>','[[[</h2>]]]');
  body.replaceText('</h3>','[[[</h3>]]]');
  body.replaceText('<h3>','[[[<h3>]]]');
  body.replaceText('</a>','[[[</a>]]]');
  body.replaceText('">','[[[">]]]');
  body.replaceText('m">','m">]]]');
  body.replaceText('" href="','[[[" href="]]]');
  body.replaceText('blank">','blank">]]]');
  body.replaceText('<a title="','[[[<a title="]]]');
  body.replaceText('<strong>','[[[<strong>]]]');
  body.replaceText('</strong>','[[[</strong>]]]');
  body.replaceText('caption id=','[[[caption id=');
  body.replaceText('alt="','alt="]]]');
  body.replaceText('www.momondo.co.uk','www.momondo.com.br');
  
  //in case your template has some other html tags, it's pretty straight forward, just add them to the right place
  // keep in mind that the ORDER MAKES A DIFFERENCE, so be careful where you add it
  
  
  DocumentApp.getUi().alert('Wait 4 seconds for the text to refresh and you\'re ready to send it!');
  
}
