import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleAddPokemon}) {
  // const [spritesForm, setSpritesForm] = useState({
  //   front: "",
  //   back: "",
  // })
  // const [inputForm, setInputForm] = useState({
  //   name: "",
  //   hp: 0,
  //   sprites: spritesForm
  // })

  // const handleSpritesInput = (e) => {
  //   console.log(e.target.name, e.target.value)
  //   setSpritesForm(() => {
  //     return {
  //       ...spritesForm,
  //       [e.target.name]: e.target.value
        
  //     }
  //   })
  // }

  // const handleInput = (e) => {
  //   console.log(e.target.name, e.target.value)
  //   setInputForm(() => {
  //     return {
  //       ...inputForm,
  //       [e.target.name]: e.target.value,
  //     }
  //   })
  // }

  // console.log(spritesForm)
  const [formName, setFormName] = useState('')
  const [formHp, setFormHp] = useState(0)
  const [formSpritesFront, setFormSpritesFront] = useState('')
  const [formSpritesBack, setFormSpritesBack] = useState('')
  const [inputForm, setInputForm] = useState({
    name: "",
    hp: 0,
    sprites: {
      front: "",
      back: ""
    }
  })

  const handleName = (e) => {
    setFormName(() => e.target.value)
  }

  const handleHp = (e) => {
    setFormHp(() => e.target.value)
  }

  const handleSpritesFront = (e) => {
    setFormSpritesFront(() => e.target.value)
  }

  const handleSpritesBack = (e) => {
    setFormSpritesBack(() => e.target.value)
  }

  const handleInput = () => {
    setInputForm(() => {
      return {
        name: formName,
        hp: formHp,
        sprites: {
          front: formSpritesFront,
          back: formSpritesBack
        }
      }
    })

    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputForm)
    })
        .then(r => r.json())
        .then(newPokemon => handleAddPokemon(newPokemon))
    
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => handleInput()}
      >
        <Form.Group widths="equal">
          <Form.Input fluid 
            onChange={handleName}
            label="Name" 
            placeholder="Name" 
            name="name" 
          />
          <Form.Input 
            fluid
            onChange={handleHp}
            label="hp" 
            placeholder="hp" 
            name="hp"
          />
          <Form.Input
            fluid
            onChange={handleSpritesFront}
            label="Front Image URL"
            placeholder="url"
            name="front"
          />
          <Form.Input
            fluid
            onChange={handleSpritesBack}
            label="Back Image URL"
            placeholder="url"
            name="back"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
