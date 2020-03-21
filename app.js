import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet, 
    View, 
    Image, 
    TouchableOpacity, 
    ImageBackground

} from 'react-native'

export default class app extends Component {

    constructor(props){
        super(props);
        this.state = {
            textoFrase: '',
            img: require('./src/img/biscoito.png'),
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = [
            'A vida trará coisas boas se tiveres paciência.',
            'Defeitos e virtudes são apenas dois lados da mesma moeda.',
            'A maior de todas as torres começa no solo.',
            'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
            'Não compense na ira o que lhe falta na razão.',
            'Não há que ser forte.',
            'Siga os bons e aprenda com eles.',
            'Não importa o tamanho da montanha, ela não pode tapar o sol.',
            'O bom-senso vai mais longe do que muito conhecimento.',
            'Quem quer colher rosas deve suportar os espinhos.'
        ];

    }

    quebraBiscoito(){
        let numeroAleatorio = Math.floor( Math.random() * this.frases.length );
        
        this.setState({
            textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
            img: require('./src/img/biscoito1.png')
        })
    }

    render() {
        return (
            <ImageBackground
                source={require('./src/img/backgroud.jpg')}
                style={{width: '100%', height: '100%'}}
            >
                <View style={styles.container}>
                    <Image 
                        style={styles.img}
                        source={this.state.img}
                    />

                    <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
                        <View style={styles.btnArea}>
                            <Text style={styles.btnText}> Quebrar Biscoito </Text>
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.frase}>{this.state.textoFrase}</Text>
                
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    img:{
        width: 250,
        height: 250
    },

    frase:{
        fontSize: 20,
        color: '#000',
        margin: 30,
        fontStyle: 'italic',
        textAlign: 'center'
    },

    botao:{
        width: 230,
        height: 50,
        marginTop: 30,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 25
    },
    
    btnArea:{
        Flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
        alignItems: "center"
    },
    
    btnText:{
       fontSize: 18,
       fontWeight: 'bold',
       color: '#000'
    },

})
