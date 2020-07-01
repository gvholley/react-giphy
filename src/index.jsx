import React, { Component } from 'react';
class Hello extends Component {
 // [...]
 handleClick() {
 this.setState({ clicked: true });
 }
 render() {
 return (
 <h1 className={this.state.clicked ? "clicked" : ""}
 onClick={this.handleClick}>
Hello, {this.props.name}
</h1>
 );
 }
}
