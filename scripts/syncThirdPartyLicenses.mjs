import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const packageDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const licenseDirectory = path.join(packageDirectory, 'licenses');
const dependencies = [
    {
        name: 'Apache ECharts',
        packageName: 'echarts',
        license: 'Apache-2.0',
        homepage: 'https://echarts.apache.org/',
        files: [
            ['LICENSE', 'apache-echarts-LICENSE.txt'],
            ['NOTICE', 'apache-echarts-NOTICE.txt'],
            ['licenses/LICENSE-d3', 'apache-echarts-d3-LICENSE.txt'],
        ],
    },
    {
        name: 'ZRender',
        packageName: 'zrender',
        license: 'BSD-3-Clause',
        homepage: 'https://github.com/ecomfe/zrender',
        files: [
            ['LICENSE', 'zrender-LICENSE.txt'],
        ],
    },
    {
        name: 'tslib',
        packageName: 'tslib',
        license: '0BSD',
        homepage: 'https://github.com/microsoft/tslib',
        files: [
            ['LICENSE.txt', 'tslib-LICENSE.txt'],
        ],
    },
];

fs.rmSync(licenseDirectory, { recursive: true, force: true });
fs.mkdirSync(licenseDirectory, { recursive: true });

const notices = dependencies.map(dependency => {
    const dependencyDirectory = path.join(packageDirectory, 'node_modules', dependency.packageName);
    const packageData = JSON.parse(fs.readFileSync(path.join(dependencyDirectory, 'package.json'), 'utf8'));

    dependency.files.forEach(([source, destination]) => {
        const license = fs.readFileSync(path.join(dependencyDirectory, source), 'utf8');

        fs.writeFileSync(
            path.join(licenseDirectory, destination),
            license.replaceAll('\r\n', '\n'),
        );
    });

    const files = dependency.files.map(([, destination]) => `  - \`licenses/${destination}\``).join('\n');

    return `- **${dependency.name} ${packageData.version}** — ${dependency.license}\n`
        + `  - ${dependency.homepage}\n${files}`;
});

const notice = `# Third-Party Notices

Velor Graph Axis includes compiled portions of the following dependencies:

${notices.join('\n')}

The complete applicable license and notice texts are distributed in the
\`licenses/\` directory. Velor Graph Axis itself remains licensed under the MIT
License in \`LICENSE\`.
`;

fs.writeFileSync(path.join(packageDirectory, 'THIRD_PARTY_NOTICES.md'), notice);
