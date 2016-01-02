# applications
NODE ?= node
NPM ?= $(NODE) $(shell which npm)

# variables
NODE_ENV ?= development

export NODE_ENV := $(NODE_ENV)

install: node_modules

node_modules: package.json
	@$(NPM) prune
	@$(NPM) install
	@touch node_modules
