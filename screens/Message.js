import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Message = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (text.trim().length > 0) {
      setMessages([...messages, {id: messages.length + 1, text, sender: 'me'}]);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.chatContainer}>
        <FlatList
          data={messages}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View
              style={[
                styles.messageContainer,
                item.sender === 'me' ? styles.myMessage : styles.theirMessage,
              ]}>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
          //   inverted
        />
      </SafeAreaView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message here"
          onChangeText={setText}
          value={text}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
  },
  messageContainer: {
    padding: 8,
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 16,
  },
  messageText: {
    fontSize: 16,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  theirMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E8E8E8',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ccc',
    padding: 8,
  },
  input: {
    flex: 1,
    padding: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    borderRadius: 16,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: '#2F4F4F',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Message;
