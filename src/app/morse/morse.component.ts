import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-morse',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './morse.component.html',
  styleUrl: './morse.component.css'
})
export default class MorseComponent {
  inputText: string = '';
  morseCode: string = '';

  isTextToMorseSelected: boolean = false;
  isMorseToTextSelected: boolean = false;

  ejecutarMetodo() {
    if (this.isMorseToTextSelected) {
      console.log(this.isMorseToTextSelected)
      this.convertToText();
    } else if (this.isTextToMorseSelected ) {
      console.log(this.isTextToMorseSelected )
      this.convertToMorse();
    }
  }
  
  static morseCodeMap: any = {
    "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....",
    "6": "-....", "7": "--...", "8": "---..", "9": "----.", "A": ".-", "B": "-...", 
    "C": "-.-.", "D": "-..", "E": ".", "F": "..-.", "G": "--.", "H": "....", 
    "I": "..", "J": ".---", "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---", 
    "P": ".--.", "Q": "--.-", "R": ".-.", "S": "...", "T": "-", "U": "..-", "V": "...-", 
    "W": ".--", "X": "-..-", "Y": "-.--", "Z": "--..", " ": "/", "!": "-.-.--", 
    ".": ".-.-.-", ",": "--..--"
  };

  textToMorse(texto: any):any {
    return texto.toUpperCase()
      .split("")
      .map((char: any) => MorseComponent.morseCodeMap[char] || char)
      .join(" ");
  }

  convertToMorse() {
    this.morseCode = this.textToMorse(this.inputText);
  }

  morseToText(morse:any):any {
    return morse.split(" ").map((code:any) => {
      for (let char in MorseComponent.morseCodeMap) {
        if (MorseComponent.morseCodeMap[char] === code) {
          return char
        }
      }
      return code
    }).join(" ")
  }

  convertToText() {
    this.morseCode = this.morseToText(this.inputText);
  }
}

