# runExec
The sample tool for running unix code in nodejs

## usage
```
  var instructionList = ['git branch', 'git reset --hard origin/master'];
  var option = {
    webRoot: '../fake-natoo'
  };
  var errCode = yield runTask(instructionList, option);
```


## Option

| param     |     type | default  | value    | description |
| :-------- | --------:| :------: | :------: |  :------:   |
| webRoot   |   String | null     |/         | exec run path|
| isAsync   |   Boolen | false    |true/false| /|
| showOutput|   Boolen | false    |true/false|/|



