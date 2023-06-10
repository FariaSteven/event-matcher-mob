import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  createButtonsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginHorizontal: 105,
  },

  createButtonsButton: {
    elevation: 10,
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#4D089A'
  },

  createButtonsButtonText: {
    width: '100%',
    color: '#fff',
    textAlign: 'center',
    fontSize: 18
  },

  highlightContainer: {
    width: '92%',
    gap: 20,
  },

  highlightWrapper: {
    flexDirection: 'row',
    elevation: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },

  highlightContent: {
     paddingLeft: 20,
     paddingRight: 120,
     paddingVertical: 20,
  },

  highlightTitle: {
    fontWeight: '900'
  }
});