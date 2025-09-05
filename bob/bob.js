// @ts-check

/**
 * Determine what Bob will reply to someone when they say something to him or ask him a question.
 * @param {string} message - What someone is saying
 * @returns {string} Bob's reply
 */
export const hey = (message) => {
  const sanitizedMessage = message.trim();

  const isYelling = /[A-Z]/.test(sanitizedMessage) && sanitizedMessage === sanitizedMessage.toUpperCase();
  const isQuestion = sanitizedMessage.endsWith('?');
  const isSilence = sanitizedMessage === '';

  if (isYelling && isQuestion) return "Calm down, I know what I'm doing!";
  if (isYelling) return 'Whoa, chill out!';
  if (isQuestion) return 'Sure.';
  if (isSilence) return 'Fine. Be that way!';

  return 'Whatever.';
};
