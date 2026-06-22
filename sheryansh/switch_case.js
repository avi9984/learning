/**
 * Q: Check consonant or vowel using switch
 */

function isVowelOrConsonant(str) {

    let vowel = 0;
    let consonant = 0;
    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);

        switch (ch) {

            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u': vowel++;
                break;

            default: consonant++
        }

    }
    console.log("consonent", consonant);
    console.log("vowel", vowel);
    return
}
isVowelOrConsonant("avinashkumar")
