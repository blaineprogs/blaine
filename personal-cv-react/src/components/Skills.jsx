import { useState } from 'react';

function Skills() {
  const [visible, setVisible] = useState(true);

  return (
    <section>
      <div className="center-btn">
        <button onClick={() => setVisible(!visible)}>
          Show/Hide Skills
        </button>
      </div>

      {visible && (
        <section className="card">
          <h2>SKILLS</h2>
          <ul>
            <li>
              Web Development
              <ul>
                <li>
                  Frontend
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                </li>
                <li>Backend</li>
              </ul>
            </li>
          </ul>
        </section>
      )}
    </section>
  );
}

export default Skills;