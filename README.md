## Lerna front skeleton

> Esse projeto é um monorepositório com o intuito de centralizar o desenvolvimento de pacotes Javascript.

### Requisitos de ambiente

- _Node LTS_ - recomendamos instalação via **[nvm]**
- _NPM LTS_ - recomendamos instalação via **[nvm]**
- _[Yarn]_ `^1.17.*` **Obrigatório**

# Atenção

### Esse monorepositório está configurado para trabalhar com `yarn workspaces`.

### Utilze todos os comandos abaixo somente com `yarn`.

#### Nós _não_ garantimos total compatibilidade com npm!

---

## Instalação

- Clone esse repositório na sua máquina
- Execute na raíz do projeto:
  ```
  $ yarn && yarn lerna bootstrap
  ```

## Dependências de projeto e de desenvolvimento

Para manipular as dependências em um pacote específico, você deve navegar pelo terminal até o diretório desse pacote, e então executar:

- Para adicionar/atualizar uma dependência externa:
  ```
  $ yarn add <package_name>
  ```
- Para adicionar uma dependência interna (comando deve ser executado na raíz do mono-repositório):
  ```
  $ yarn lerna add <package_name> --scope=<package_dest>
  ```
- Para adicionar/atualizar uma dependência de desenvolvimento:
  ```
  $ yarn add -D <package_name>
  ```
- Para remover qualquer dependência:
  ```
  $ yarn remove <package_name>
  ```

## Importando pacotes de repositórios existentes

Para importar um repositório já existente para esse monorepositório, você deve:

- Clone o repositório alvo na sua máquina, **fora** do contexto de meta-lerna.
- Via terminal, entre na raíz de meta-lerna.
- Execute:
  ```
  $ yarn lerna import ~/path/to/repo --dest=relative/path/locale/to/import --flatten
  ``
  ```

## Principais comandos do monorepositório

- **_Registrar_** pacote no workspace; **_Instalar_** e **_Linkar_** todas as dependências do workspace:
  ```
  $ yarn lerna bootstrap
  ```
- **_Visualizar_** pacotes do workspace:
  ```
  $ yarn lerna la
  ```
- **_Limpar_** node_modules de todos os pacotes do workspace:
  ```
  $ yarn lerna clean
  ```
- **_Tag_** versões dos pacotes alterados:
  ```
  $ yarn lerna version
  ```
- **_Publicar_** e **_Tag_** versões dos pacotes alterados:
  ```
  $ yarn lerna publish
  ```
- Ajuda:
  ```
  $ yarn lerna --help
  ```

[//]: #
[nvm]: https://github.com/nvm-sh/nvm
[yarn]: https://yarnpkg.com/docs/install
