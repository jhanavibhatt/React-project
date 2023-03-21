import React from 'react'

function Title(props) {
  const {titlestate,descriptionstate}=props;
  return (

    <>
    <div>Hy, I am {props.title1}</div>
    <div>I Am Study {props.title2}</div>
    <div>I Am {props.title3}</div>
    <div>{titlestate}</div>
    <div>{descriptionstate}</div>

    </>
  )
}