//import * as React from 'react'
import React from 'react'

type State = {
  message: string
}

class Hello extends React.Component<any, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      message: 'hello'
    }
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({message: event.currentTarget.value})
  }

  render() {
    return <div>
      <h1>Hello React</h1>
      <input type='text' defaultValue='message' onChange={this.onChange}/>
    </div>
  }

  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<State>, snapshot?: any): void {
    if (prevState.message !== this.state.message) {
      console.log('New message is: ', this.state.message)
    }
  }

}

export default Hello
