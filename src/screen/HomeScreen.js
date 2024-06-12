import { Button, StyleSheet, Text, View } from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>You're in Home</Text>
            <Button 
                title='Details'
                onPress={() => navigation.navigate('Detalhes')}
            />

            <Button
                title='Login'
                onPress={() => navigation.navigate('Logar')}
            />
                <Button
                  title="Ir para Reclamações e Sugestões"
                  onPress={() => navigation.navigate('Reclamacoes e Sugestoes')}
                />

                 <Button
                  title="Ir para Atividades"
                  onPress={() => navigation.navigate('Atividades')}
                />

                <Button
                  title="Ir para Perfil"
                  onPress={() => navigation.navigate('Perfil')}
                />

                <Button
                  title="Ir para Turma"
                  onPress={() => navigation.navigate('Turma')}
                />

                <Button
                  title="Ir para AluProf"
                  onPress={() => navigation.navigate('AluProf')}
                />

                <Button
                  title="Ir para Vagas"
                  onPress={() => navigation.navigate('Vagas')}
                />

                <Button
                  title="Ir para Cardapio"
                  onPress={() => navigation.navigate('Cardapio')}
                />

                <Button
                  title="Ir para Conf"
                  onPress={() => navigation.navigate('Conf')}
                />

              </View>
            );
          };

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',    
    },
})