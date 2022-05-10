import "./styles.css";
import { sdk } from '@symblai/symbl-js';

export default function App() {

  const {
    sdk
  } = require('@symblai/symbl-js');

  sdk.init({
    // APP_ID and APP_SECRET come from the Symbl Platform: https://platform.symbl.ai/
    appId:  "",
    appSecret: "",
    basePath: ''
  }).then(() => {
    sdk.startEndpoint({
      endpoint: {
        type: 'pstn', // This can be pstn or sip
        phoneNumber: '+91',  // Use international code.
        // dtmf: DTMF_MEETING_ID  // if password protected, use "dtmf": "<meeting_id>#,#<password>#"
      }
    }).then(connection => {
      console.log('Successfully connected.', connection.connectionId);

      // Scheduling stop endpoint call after 60 seconds for demonstration purposes
      // In real adoption, sdk.stopEndpoint() should be called when the meeting or call actually ends

      setTimeout(() => {
        sdk.stopEndpoint({
          connectionId: connection.connectionId
        }).then(() => {
          console.log('Stopped the connection');
          console.log('Summary Info:', connection.summaryInfo);
          console.log('Conversation ID:', connection.conversationId);
        }).catch(err => console.error('Error while stopping the connection', err));
      }, 60000);
    }).catch(err => console.error('Error while starting the connection', err));
  }).catch(err => console.error('Error in SDK initialization.', err));
    return(
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}