(async () => {
  const input = document.querySelector('textarea');
  const output = document.querySelector('.translated');
  const summaryOutput = document.querySelector('.summary');
  const detected = document.querySelector('.detected');
  const language = document.querySelector('select');
  const form = document.querySelector('form');

  form.style.visibility = 'visible';

  //To check if the language detector is available

  //console.log('AI:', self);

  // if (!('ai' in self) || !('languageDetector' in self.ai)) {
  //   document.querySelector('.not-supported-message').hidden = false;
  //   return;
  // }

  //To check if the translator is available
  // if (!('ai' in self) || !('translator' in self.ai) ) {
  //   document.querySelector('.not-supported-message').hidden = false;
  //   return;
  // }

  //To check if the summarizer is available
  // if (!('ai' in self) || !('summarizer' in self.ai)) {
  //   document.querySelector('.not-supported-message').hidden = false;
  //   return;
  // }


  // !!! FINAL: Check if AI capabilities are available
  // if (!('ai' in self) || !('languageDetector' in self.ai) || !('translator' in self.ai) || !('summarizer' in self.ai)) {
  //   document.querySelector('.not-supported-message').hidden = false;
  //   return;
  // }

  // Setup language detector
  // const languageDetectorCapabilities = await self.ai.languageDetector.capabilities();
  // if (languageDetectorCapabilities.capabilities === 'no') {
  //   console.log("Language detector isn't usable.");
  //   return;
  // }

  // Setup language selector 
  //const detector = await self.ai.languageDetector.create();

  //console.log(detector);

  input.addEventListener('input', async () => {
    const text = input.value.trim();
    if (!text) {
      detected.textContent = '—';
      return;
    }
    // const results = await detector.detect(text);
    // const topResult = results[0];
    // detected.textContent = `${(topResult.confidence * 100).toFixed(1)}% sure it is ${languageTagToHumanReadable(topResult.detectedLanguage, 'en')}`;
  });

  // Setup transalator
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    try {
      // const detectedResult = (await detector.detect(text))[0];
      // const sourceLanguage = detectedResult.detectedLanguage;
      // const targetLanguage = language.value;

      // if (sourceLanguage === targetLanguage) {
      //   output.textContent = 'Source and target languages are the same.';
      //   return;
      // }

      // const translatorCapabilities = await self.ai.translator.availability({
      //   sourceLanguage: 'es',
      //   targetLanguage: 'fr',
      // });

      //Create translator with download monitor
      // const translator = await self.ai.translator.create({
      //   sourceLanguage,
      //   targetLanguage,
      //   monitor(monitor) {
      //     monitor.addEventListener('downloadprogress', (e) => {
      //       console.log(`Translator: Downloaded ${e.loaded} of ${e.total} bytes`);
      //     });
      //   },
      // });

      // console.log('Translator:', translator);

      // await translator.ready;

      // const translated = await translator.translate(text);
      // output.textContent = translated;

      // const options = {
      //   sharedContext: 'This is a scientific article',
      //   type: 'key-points',
      //   format: 'markdown',
      //   length: 'medium',
      // };
      // const summarizer = await self.ai.summarizer.create(options,{
      //   monitor(m) {
      //     m.addEventListener('downloadprogress', (e) => {
      //       console.log(`Downloaded ${e.loaded} of ${e.total} bytes.`);
      //     });
      //   },
      // });
      // await summarizer.ready;
      
      const textarea = document.querySelector('textarea');
      const summaryOutput = document.querySelector('.summary');
      
      document.querySelector('#summarize').addEventListener('click', async () => {
        const inputText = textarea.value.trim();

        if (!inputText) {
          summaryOutput.textContent = 'Please enter some text.';
          return;
        }
      
        try {
          summaryOutput.textContent = 'Summarizing...';
      
          //create stream to summarize
          //  const stream = await summarizer.summarize(inputText, { stream: true });

          // console.log('Stream:', stream);
      
          // let result = '';
          // let previousChunk = '';
          // for await (const chunk of stream) {
          //   const newChunk = chunk.startsWith(previousChunk)
          //     ? chunk.slice(previousChunk.length)
          //     : chunk;
      
          //   result += newChunk;
          //   previousChunk = chunk;
      
          //   summaryOutput.textContent = result; // live updates!

          //   console.log('Summary:', result);
          // }
      
        } catch (err) {
          summaryOutput.textContent = 'Failed to summarize.';
          console.error(err);
        }
      });
    } catch (err) {
      console.error('Translation Error:', err);
      output.textContent = 'An error occurred during processing.';
      summaryOutput.textContent = 'Failed to translate.';
    }
  });

  // Helper: display language names
  // const languageTagToHumanReadable = (languageTag, targetLanguage) => {
  //   const displayNames = new Intl.DisplayNames([targetLanguage], {
  //     type: 'language',
  //   });
  //   return displayNames.of(languageTag);
  // };

  // Trigger initial detection (empty)
  input.dispatchEvent(new Event('input'));
})();