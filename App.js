import React from 'react';
import { View, Text } from 'react-native';

class Orcun extends React.Component{
  render(){
    const boyut = 20;
    const satirlar = [];

    // for(let i = 0; i<=boyut; i++){

    //    satirlar[i] = '';

    //   for(let j =0; j<=i; j++) satirlar[i] += '*';
    // } 

    for(let i = 0; i<=boyut; i++){

      satirlar[i] = '';

     for(let j =0; j<=boyut-i; j++) satirlar[i] += '-';
     for(let j =0; j<=2*i; j++) satirlar[i] += '*';
   } 

   
    
    satirlar.forEach(s =>  console.log(s));
    return <Text></Text>;
  } 
}

export default Orcun;