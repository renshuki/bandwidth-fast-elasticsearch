## Description
This tiny script retrieve your download bandwidth speed every 5 minutes and send the data point to a `fastcom` index on Elasticsearch.

## Requirements
- Get a Fast.com API token: [How to](https://github.com/branchard/fast-speedtest-api#how-to-get-app-token-)
- Have an Elasticsearch deployment running (this code is for Elastic Cloud)

## Setup
Add the following environment variables:
- `EC_ID` (Elastic Cloud ID for your deployment)
- `ES_USERNAME` (Elasticsearch username)
- `ES_PASSWORD` (Elasticsearch password)
- `FASTCOM_TOKEN` (Fast.com API token)

## Install

## Usage
`node index.js` to run the script.