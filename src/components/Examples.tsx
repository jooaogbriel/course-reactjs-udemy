import { Children } from "./Children"
import { useState } from 'react';
import { EXAMPLES } from "../data";
import Section from "./Section";

export const Examples = () => {

    const [selectedTopic, setSelectedTopic] = useState('');

    function handleChangeValue(selectButton: string): void {
        setSelectedTopic(selectButton);
        console.log(selectedTopic);
      }
    
    let tabContent: React.ReactNode = <p>Please select a topic</p>;
    
    if (selectedTopic) {
        tabContent = (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        );
    }

    return (
            <Section title= 'Examples'>
                <menu>
                    <Children isSelected={selectedTopic === 'components'} onSelect={() => handleChangeValue('components')} >Components</Children>
                    <Children isSelected={selectedTopic === 'jsx'} onSelect={() => handleChangeValue('jsx')} >JSX</Children>
                    <Children isSelected={selectedTopic === 'props'} onSelect={() => handleChangeValue('props')} >Props</Children>
                    <Children isSelected={selectedTopic === 'state'} onSelect={() => handleChangeValue('state')} >State</Children>
                </menu>
                {tabContent}
            </Section>
    )
}
