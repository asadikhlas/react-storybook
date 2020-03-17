import React from 'react';
import { Button } from '@storybook/react/demo';
import { action } from '@storybook/addon-actions'
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs'

// export default { title: 'Button', component: Button };

// export const withEmoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );

// withEmoji.story = {
//   parameters: {
//     notes: 'A small component'
//   }
// }

export default {
  title: "Storybook knobs",
  decorators: [withKnobs]
}

export const withButton = () => (
  <button disabled={boolean("Disabled", false)} >
  {text("Label", "This is my new storybook")}
  </button>
)

withButton.story = {
  parameters: {
    notes: 'this is my button component with different knobs'
  }
}

export const asDynamicVariable = () => {
  const name = text("Name", "Asad ikhlas")
  const age = number("Age", 23);
  const content = `My name is ${name} and i'm ${age} years old`

  return <div style={{color:'white'}}>{content}</div>
}