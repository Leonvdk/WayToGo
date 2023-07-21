/* eslint-disable semi */
export default interface GptResponse {
  data:{
    id: string;
    object: string;
    created: number;
    choices: [{
      index: 0;
      message: {
        role: string;
        content: string;
      },
      finishReason: string,
    }],
    usage: {
      promptTokens: number;
      completionTokens: number;
      totalTokens: number;
    },
  };
}
