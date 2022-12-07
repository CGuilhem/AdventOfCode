const input = "rdzrddbgdbbqtbqbrrznznjzjjctcbtttrvrwwsvwssjfjcjnjzzqgzgzsggfddvnnrbbwgwfwgfgpgrprgrprmmqjmqmvmlmmgjmmgqmqppqgqlqmllszsmzzwfzfqzzgcccmggvfgvvzlvzlznnjfjsscrsrprcrscsqsfqfggrrhccpnpwphwhchfhtfhttzpzwzjzqzjjqjdqqnvqnqjqbqcbqccdllbcblbjljgjbgbhhgphghjhrrvbrvbrvvfggwbwnnghgwhhpbpgphpnpgpqqzvqzqtzzngzngnjnnffgbgbvvjvqvwwqnwqnnvrnnfgfttcftcfczzpbbdlbdbhbssrggtfgfbgfgfnffqsfqfcqqqwvvqpphfpfcfrrjmjhjrjbblcbbznzwwpbwwsvvwnvvzjvzzmllrpllqffplpwlpwwlpwwmnmrrlggvssjggdjjsffbtthlhsswvwjjbtbjbsswqsshppddcjjlrlttwgtwwcnwcncmcpmpnnhndnccqscqqzqpplglvvpggcvvhnhmhqqsvvhcvvjpphbhnndpdbdndjnnmccmjmhmrrlcrrfzfnndldffstffhqffhcffhbhwhzhnhrhprhhtqtztntnptnppjdpdqdzqqpzprrqbqmqhmqqmhqqjttlrrqbqnqdnnrqqtqfqjjdfjfdjjsnspptltlgttmctcgttcthcttdpppzphpnhhvthtccbvccpplpwwfgwfffhfbbrsbbgppnhpnhhwnnnrprcpcncffrqqpjprpddjnddnccqtcthhfqfnnnlrrzhhmvvczzlbzbrzbbjpjpbbjttmwtwbtbqqtssgdsdsmsmbsmsfftltmtwwsswbwdbdwbbblgbbqpbqbmbgmbgmbbvcvbbmrrldlpdpqqnvvrzzcddjsdjjfvjvvndnvvrsvrsvrsrmsswlswlssqllfmlffmwmttjgttzgtggghrhprppbgbdgdtgddvmdvvbmmchhjppczzglzglzglzgggsmsrrsttgddmvvhddvdhvvcfcvvglvlmvmdvmdvdcdvvgfftccljllmssrvvqhvvnlnplnlglrlvrvfvrrgjjzqjjzcjcvcsvvbppgrrbdrdsrddqsspwssdlltlcttgngzglgfgzfzhfzhfhnffmsspvsscjjrbbpgbbfgbffhggzpznzmnmcmzmdzmzjzddcsscgssdnddjbdjdtdzdwwshwhfhtthjhsjjfjvvdnnmzmtmmlrlblzzmmspsnpnbnvvczvzsszrrsgsbsrrlprrzfrrjdrdbdhdvvwrvvrfvrrvwrrqlqwwqjjpwwffdvffwfbwwdrwdrddhhhjghjhvhccgbcbvblllbwlwtlldbdzbbdpbbqmmglmllvwwzmzhhfnfcnfcfddvrvhvbvzvbvhvthtrtppsccggdgpghgfhhhnwnmmwfwtffpjfppmdpdhppvwvfvvhdhzhtzhtzzplpspmpnpzpgzgqgvvqcqcqmqffzszwzfwfzzcmchhmgmppgwwvffnnvhhttvtjvjgjljmmfcmmzmvvjfjggppqmpqqswsnwwdvwdvwdwjwrrrtprpqrrsddsshgssbbpbgpbbprprzppsnsbszszccddfcftcfczffchfcfjjffjwwsbbvfvpfprpbczqdnvrqrlhsrzvlvgzbqpwgpmgftzfvtlnlqrtmpjfstmsrbfjldtmhvvqwznrcflbvmsnbzcrjvbzgvvmwlzcwggwvhnpscnwhjldzjvmtfdgvptfhjtdtwfjntzqtswqgwvnfgqhqpdvdchfqjzfhgjmdstmchppcvgpdfrqbrhrvdvzbtnnrpqsnmnljjzgzqfnzmlvbzmwzfbfszvfsqdnqfstpjglwtcdjpmdfqzfcsngbcvvjvdzlnzndcggcdtdjpwgvfzlfdqpgbgfjjfvgtwwrgtrfcpfvmzvrwrftpfdprzmcmrpnjpfrdvbmlrfzrjcdzhvwbpgmbpdnqggjdpqttgnqbtjfmrglqbvcfjwghrqtcgjddhwpntjgtghmfgvjdhbzzgmfnrrrgvdmsfbhndfcwlbbtsdcbpgfpbvnwmpwdpjlvcbcgnwjzftsfqhvwdshzltrmqpcsngfzrvfwhffrcjzlfqjqdbcntdwhfrfnrzwftqhlfjpjqpngjqjcnfnrpmmbprdtzgsvsdjpzsnzzmzdfjplfhzqrnrwggcvrrmqzwlvslwvtvhbgwmjmnzftrbfhdrzszcvmdhgfvwgwgsgqtpwgvpvfrszczmsmstwhnhtnftmmmjblpchrnrdwlnhrvqtbwqwdchfjbcldmjmjzwlcngfgfvmblgmnwtwvjmzswzmpvdjtcfgcpvvqhrfnwcczrrrhwwvfrngwmlstqcvvrqrshwdvrgtgbffvlwtvwhvlcwwqgspnfmndbsbpvdbjwdlfntwrrmtgsdtwbfmjjcjfvsvltwdjmvswwpchpdtsjmbbgcgtddcbprwznsldmwflrgcrgfflzwllrzcrgdgqgsvrqmspqzsrzvppztrhlpsnqdlhmghdcrppvbljsnrjgcwhpvmlgcnswrjjbjltwnctqbqsffbcfpclhcbrnsjlmrstpngbvcfcbjstgvzwfgcsqbwgqqblsnmfddprrqmpqgfrjbhfptrdvltcrmtrcqgcdfpjhjptzngzqdghqhpsfwlmrwgfhldzpfrbtzzgsblcfmwztjmtjzgwrpttvwfhbntvsgnfvbpfpnscdspmcvncsqltzqnwczvdbtphwrdtjcszmhbpcfnvbrbgfpnrrhvhzlrglthpldrlfscpvpvttvjtfdrqpjvnwvmscdvclbnzfvppslzgmglrvvdvpsbsfhflnjbdnpqzjzlrfgwgjvwvpthjptftlzppmnmrrpfvdhgwfzfdnnbhqpwrzvvdgtcrflwfjgbmvbgsnqzqtmsvrdlfmlbqqdnfftljbtphnpqqrgbrlzrbbhlgvjpcdbmtvzlpqhbvjpmhpdmtrmjwvzrbfrdrdfmwsfvllljdwmnqlgcnzvpphwmlmstcsljvmljcjprtgmzfssgbtjlttssfzbcqbgnjnvrwzchtwtwdtfwngdflwzjrhzdlrrqfnsztvdbzqfwfzppqrghrhzsqtwqstsfspddpjrpffhgqvspzwmlzwhtzqqldqbwlsrqhlmvhhmzjpdsrgdcvqnfpldnmblgvvssrcdnjqvcgwtwmhqdcwtsqqhbntvjnlbljlqjqglggvpqncpdzztlvhhlghtrncfcdhjtzwjqdhlntjfrzccbnmglmnzwvplclvcmnsppqjhbggbzncqlcfnzbbzdjrvcdthcqwjzjvdbjddcbjchwfgbjhwqpzbpgsdtlwlphtvhwddjdbwbpsnqhnffqptcrljcqzzhszdfpdfsgflhwwsgbfcnwrbdqflnrcwddwwmfztlbswlzhtzzcllnvbtqgjsdzmhcpnnqpdpqgdntlfwgvddgqvhqhrbvstsmzrmgwslpdjlsbgthfhgnlftbqdnzsvcrrmllcjvdlqrzbvrbrjcbpttsvwcrnlvvbnjvfgldzmtflvmzqdgbnjcgctllrldgzltwlswmfbbwjmcqpldhhdsmqpbvnjprdqnvrbjhrjzqwqfrfqwngwtwjjmzdbqmpmvqrprjhnhnrlmlgpfwwzjhlgmbzdlpshcqpnlgrqvprbspmdznzzsvhdlzwmttpdnlrlqjllqnshjllvvsrblscjcmbcqlsgpcjlmmpgwrvjnjzvzfgvgghwqfjswjbjghmzcgdpsjwhbnzmbhtzgnchpbrmnfdbfscgzldpqmvprjpvcwtwdfjblfshffwqctdphhnhngsjlrqtqprpjhwqcbmhctqbpdtpzvbbfncfrcvmbfvqmbmqjvgtdvspfqfbqnmjwhzbcpcfgbhtllbsssqntfbmsmlwhjchgcsrvsfznbmspwwszqfnwzzljfnvcwnwmgfzqfvmwwwdjd"

let value;
let value2;

const part1 = () => {
    let count = 0
    let buffer = []


    for (let i = 0; i < input.length; i++) {   
        count++

        if (buffer.length < 4) {
            buffer.push(input[i])
        }
        
        if (buffer.length === 4) {
            isThereADuplicate = buffer.some((element, index) => {
                return buffer.indexOf(element) !== index
            });
            if (isThereADuplicate) {
                buffer.shift()
                buffer.push(input[i])
            }
            else {
                return count--
            }
        }     
    }
}
value = part1()
console.log(value)

const part2 = () => {
    let count = 0
    let buffer = []


    for (let i = 0; i < input.length; i++) {   
        count++

        if (buffer.length < 14) {
            buffer.push(input[i])
        }
        
        if (buffer.length === 14) {
            isThereADuplicate = buffer.some((element, index) => {
                return buffer.indexOf(element) !== index
            });
            if (isThereADuplicate) {
                buffer.shift()
                buffer.push(input[i])
            }
            else {
                return count--
            }
        }     
    }
}
value2 = part2()
console.log(value2)
