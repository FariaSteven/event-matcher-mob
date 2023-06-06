import { StyleSheet } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: "#0095FF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },

  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 600,
    paddingHorizontal: 20,
  },

  buttonLogin: {
    textDecorationLine: 'underline',
    color: '#0095FF',
    marginTop: 5,
    fontSize: 15,
    fontWeight: 300,
    paddingHorizontal: 20,
  },

  buttonForgetPassword: {
    textDecorationLine: 'underline',
    color: '#000',
    marginTop: 5,
    fontSize: 15,
    fontWeight: 300,
    paddingHorizontal: 20,
  },

  warningModal: {
    position: 'absolute',
    color: '#FFF',
    backgroundColor: '#0095FF',
    padding: 20,
    elevation: 10,
    width: 340,
    borderRadius: 10
  },

  warningModalTitle: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 20,
  },

  warningModalBody: {
    textAlign: 'center',
    color: '#FFF',
    marginVertical: 20
  },

  warningModalButton: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },

  warningModalButtonText: {
    color: "#0095FF",
    textAlign: "center"
  }
});