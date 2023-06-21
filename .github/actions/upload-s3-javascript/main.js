const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

function run() {
    core.notice('Hello from my custom javascript action!');

    const bucket = core.getInput('bucket', { required: true });
    const bucketRegion = core.getInput('bucket-region', { required: true });
    const destFolder = core.getInput('dest-file', { required: true});

    const s3Uri = `s3://${bucket}`;

    exec.exec(`aws s3 sync ${destFolder} ${s3Uri} --region ${bucketRegion}`)
    
}

run();