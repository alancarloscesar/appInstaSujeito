import React from 'react';
import { View,Text,StyleSheet, Image,TouchableOpacity } from 'react-native';

export default function List(props) {

    function carregaIcone(likeada){
        return likeada ? require('../img/likeada.png') : require('../img/like.png')
    }

    function mostraLikers(likers){
        if(likers == 0){
            return;
        }else{
            if(likers == 1){
                return(
                    <Text style={styles.likes}>{likers+' Curtida'}</Text>
                );
            }else{
                return(
                    <Text style={styles.likes}>{likers+' Curtidas'}</Text>
                );
            }
        }
            
    }

 return (
   <View>
       <View style={styles.viewPerfil}>
            <Image
            source={{uri: props.data.imgperfil}}
            style={styles.fotoPerfil}
            />

            <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
       </View>

        <Image
        resizeMode="cover"
        source={{uri: props.data.imgPublicacao}}
        style={styles.fotoPublicacao}
        />

        <View style={styles.areaBotao}>
            <TouchableOpacity>
                <Image
                source={carregaIcone(props.data.likeada)}
                style={styles.iconeLike}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnsend}>
                <Image
                source={require('../img/comment.png')}
                style={styles.iconeLike}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnsend}>
                <Image
                source={require('../img/send.png')}
                style={styles.iconeLike}
                />
            </TouchableOpacity>
        </View>

        {mostraLikers(props.data.likers)}

        <Text style={styles.nomeRodape}>{props.data.nome}</Text>

        <Text style={styles.descRodape}>{props.data.descricao}</Text>

   </View>
  );
}

const styles = StyleSheet.create({
    viewPerfil:{
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        padding: 8
    },
    fotoPerfil:{
        width: 50,
        height: 50,
        borderRadius:25
    },
    nomeUsuario:{
        paddingLeft:5,
        fontSize:20,
        color: '#000'
    },

    fotoPublicacao:{
        alignItems:'center',
        height: 400,
    },
    areaBotao:{
        flexDirection:'row',
        padding: 5,

    },
    iconeLike:{
        width: 25,
        height: 25
    },
    btnsend:{
        paddingStart:15
    },
    likes:{
        fontWeight:'bold',
        marginLeft:5,
    },
    nomeRodape:{
        fontSize:18,
        fontWeight:'bold',
        paddingLeft: 5
    },
    descRodape:{
     paddingLeft: 5,
     paddingBottom:10,
     fontSize:15   
    }
})