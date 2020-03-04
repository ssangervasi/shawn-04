#!/usr/bin/env node
import { Command } from 'commander'

import { rephrase } from './shawn'

const main = () => {
	const program = new Command()
	program
		.arguments('<PHRASE>')
		.description('Shomething Shawn would shay')
		.option(
			'-p, --pedantic',
			'If "Sean" is "Shawn" then "Sea" should be "Shaw"!',
			false
		)
		.action(shawnAction)
	program.parse(process.argv)
}

const shawnAction = (phrase: string, cmd: Command): string => {
	const rephrasing = rephrase(phrase, cmd.pedantic)
	console.log(rephrasing)
	return rephrasing
}

main()
