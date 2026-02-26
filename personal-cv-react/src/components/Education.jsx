export default function Education() {
  return (
    <section className="card">
      <h2>Education</h2>

      <table border="1" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Program</th>
            <th>Institution</th>
            <th>Year Graduated</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Bachelor of Science in Information Management</td>
            <td>USTP – CDO Campus</td>
            <td>2024-2028</td>
          </tr>

          <tr>
            <td>Humanities and Social Sciences</td>
            <td>Liceo de Cagayan University</td>
            <td>2022-2024</td>
          </tr>

          <tr>
            <td>Junior High School (Grade 9-10)</td>
            <td>Misamis Oriental General Comprehensive High School</td>
            <td>2020-2022</td>
          </tr>

          <tr>
            <td>Junior High School (Grade 7-8)</td>
            <td>Pilgrim Christian College</td>
            <td>2018-2020</td>
          </tr>

          <tr>
            <td>Elementary School (Grade 1-6)</td>
            <td>City Central School</td>
            <td>2012-2018</td>
          </tr>

          <tr>
            <td>Kindergarten</td>
            <td>Mount Olive Christian School</td>
            <td>2010-2012</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}