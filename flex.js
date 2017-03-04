/**
 * Created by yugai on 17/3/3.
 */
'use strict';
import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	TextInput,
	TouchableOpacity
} from 'react-native';
const {width, height} = Dimensions.get('window')

export default class Flex extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.background} source={require('./resource/login_bg.png')}>
					<Image style={styles.logo} source={require('./resource/logo.png')}>
					</Image>
					<View style={styles.name}>
						<Image style={styles.icon} source={require('./resource/pxwk_login_et_nam_icon.png')}></Image>
						<TextInput style={styles.input}/>
					</View>
					<View style={styles.password}>
						<Image style={styles.icon} source={require('./resource/pxwk_login_et_password.png')}></Image>
						<TextInput style={styles.input}/>
					</View>
					<View style={styles.info}>
						<Text style={styles.text}>忘了密码</Text>
						<Text style={styles.text}>注册</Text>
					</View>
					<TouchableOpacity style={styles.btn_login}>
						<Text style={styles.text}>登陆</Text>
					</TouchableOpacity>

					<View style={styles.other_login}>
						<Image style={styles.other_icon} source={require('./resource/qq_icon.png')}></Image>
						<Image style={styles.other_icon} source={require('./resource/weibo_icon.png')}></Image>
						<Image style={styles.other_icon} source={require('./resource/weixing_icon.png')}></Image>
					</View>
				</Image>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	background: {
		flexDirection: 'column',
		width: width,
		height: height,
		alignItems: 'center',
	},
	logo: {
		marginTop: 100,
		width: 80,
		height: 80,

	},
	name: {
		marginTop: 100,
		marginLeft: 100,
		marginRight: 100,
		backgroundColor: '#fff',
		height: 38,
		width: width - 100,
		flexDirection: 'row'
	},
	password: {
		marginTop: 1,
		marginLeft: 100,
		marginRight: 100,
		backgroundColor: '#fff',
		height: 38,
		width: width - 100,
		flexDirection: 'row'
	},
	info: {
		width: width - 100,
		marginTop: 10,
		justifyContent: 'space-between',
		flexDirection: 'row'
	}
	,
	icon: {
		width: 24,
		height: 24,
		alignSelf: 'center',
		marginLeft: 10
	},
	input: {
		flex: 1,
	},
	text: {
		backgroundColor: '#00000000',
		fontWeight: 'bold',
		color: '#fff'
	},
	btn_login: {
		width: width - 100,
		height: 38,
		marginTop: 10,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#55AA66'
	},
	other_login: {
		marginTop: 25,
		width: width - 200,
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	other_icon:{
		width:30,
		height:30
	}
});


AppRegistry.registerComponent('TestFlex', () => Flex);