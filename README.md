# Celestia PayForBlob transaction UI

This repository is to fulfill the task described [here](https://docs.celestia.org/nodes/itn-pfb-ui/). 

It provides a UI to interact with the Celestia blockchain by submitting PayForBlob transactions (https://docs.celestia.org/developers/node-tutorial/#submit-a-pfb-transaction).

## Dependencies
* Yarn
* NodeJS

## Installation

Clone this repository

```
$ git clone https://github.com/jbroudou/t1.git
```

Create the `.env` file and point the endpoint variable to your Celestia node.

```
$ cp .env.example .env
```

Install project dependencies

```
$ yarn install
```

Run the project

```
$ yarn dev
```
or
```
$ yarn build
$ yarn start
```