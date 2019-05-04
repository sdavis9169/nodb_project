let messages = [
  {
    text: 'Add Recipes',
    id: 0
  }, 
]

let id = 1;

module.exports = { 
  getText: ( req, res ) => {
    res.status(200).send(messages);
  },

  postText: (req, res) => {
    let {text} = req.body
    messages.push ({
      text: text, 
      id:id
    }
    )
    id++
    res.status(200).send(messages)
  },

  edit:(req, res) => {
    for (let i=0; i < messages.length; i++) { 
      if (messages[i].id == req.params.id) {
        messages[i].text=req.body.text;
      }
    }
    res.status(200).send(messages)  
  },

  delete:(req, res) => {
    for (let i=0; i < messages.length; i++) { 
      if (messages[i].id == req.params.id) {
        messages.splice(i, 1);
      }
    }
    res.status(200).send(messages) 
  }

  
}