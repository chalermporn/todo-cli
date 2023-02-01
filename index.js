#! /usr/bin/env node
const { program } = require('commander')
const list = require('./commands/list')
const add = require('./commands/add')
const markDone = require('./commands/markDone')
const vue = require('./commands/vue')
const vueadd = require('./commands/vueadd')
const vuefind = require('./commands/vuefind')

program
    .command('list')
    .description('List all the TODO tasks')
    .action(list)

program
    .command('add <task>')
    .description('Add a new TODO task')
    .action(add)

program
    .command('mark-done')
    .description('Mark commands done')
    .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
    .action(markDone)

program
    .command('create vue')
    .description('Create file vuejs')
    .action(vue)

program
    .command('vue-add')
    .description('Add file vuejs')
    .action(vueadd)

program
    .command('vue-find')
    .description('find file vuejs')
    .action(vuefind)

program.parse()
