import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/dataview/accessibilitydoc';
import { BasicDoc } from '../../components/doc/dataview/basicdoc';
import { ImportDoc } from '../../components/doc/dataview/importdoc';
import { LazyDataViewDoc } from '../../components/doc/dataview/lazydoc';
import { StyleDoc } from '../../components/doc/dataview/styledoc';

const DataViewDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'lazy',
            label: 'Lazy',
            component: LazyDataViewDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'DataView', pathname: '/modules/dataview.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React DataView Component</title>
                <meta name="description" content="DataView displays data in grid or list layout with pagination and sorting features." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>DataView</h1>
                        <p>DataView displays data in grid or list layout with pagination and sorting features.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default DataViewDemo;
