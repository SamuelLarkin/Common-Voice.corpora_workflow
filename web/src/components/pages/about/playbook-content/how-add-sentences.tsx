import * as React from 'react';
import { Localized } from '@fluent/react';

const HowAddSentences = React.memo(() => {
  const strong = <strong />;

  return (
    <>
      <Localized
        id="about-playbook-how-add-sentences-content-1"
        elems={{
          strong,
          scAccountLink: (
            <a
              href="https://commonvoice.mozilla.org/sentence-collector/login"
              target="_blank"
              rel="noopener noreferer"
            />
          ),
        }}>
        <p />
      </Localized>
      <Localized
        id="about-playbook-how-add-sentences-content-2"
        elems={{
          languageGuidelinesLink: (
            <a
              href="https://commonvoice.mozilla.org/sentence-collector/#/en/how-to"
              target="_blank"
              rel="noopener noreferer"
            />
          ),
          licenseLink: (
            <a
              href="https://creativecommons.org/share-your-work/public-domain/cc0/"
              target="_blank"
              rel="noopener noreferer"
            />
          ),
          waiverLink: (
            <a
              href="https://common-voice.github.io/community-playbook/sub_pages/cc0waiver_process.html"
              target="_blank"
              rel="noopener noreferer"
            />
          ),
        }}>
        <p />
      </Localized>
      <Localized
        id="about-playbook-how-add-sentences-content-3"
        elems={{
          strong,
          scraperLink: (
            <a
              href="https://discourse.mozilla.org/t/sentence-extractor-current-status-and-workflow-summary/62332"
              target="_blank"
              rel="noopener noreferer"
            />
          ),
        }}>
        <p />
      </Localized>

      <Localized id="about-playbook-how-add-sentences-content-4">
        <p />
      </Localized>
    </>
  );
});

export default HowAddSentences;
