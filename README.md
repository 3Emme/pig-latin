1. The program will do nothing to non-alphabetical characters.
  * Example input: "5"
  * Example output: "5"
2. The program will add "way" to the end of words beginning with a vowel
  * Example input: "all"
  * Example output: "allway"
3. The program will move all first consonants to the end and add "ay"
  * Example input: "push"
  * Example output: "ushpay"
4. The program will move "qu" when it appears at the begginning of a word to the end and add "ay"
  * Example input: "quail"
  * Example output: "ailquay"
6. The program will also include the vowel "u" in the moved beginning consonant group so long as the last consonant in the      beginning group was "q"
  * Example input: "squeal"
  * Example output: "ealsquay"
7. The program will move "y" to the end and will be treated in this case as a consonant
  * Example input: "yes"
  * Example output: "esyay"