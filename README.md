# proof-dictionary

This dictionary is for [proofdict](https://github.com/proofdict/proofdict).

- Dictionary: <https://proofdict.mirror-kt.dev/>
- Editor: <https://proofdict.mirror-kt.dev/editor>
- JSON API: <https://proofdict.mirror-kt.dev/dictionary.json>

## Usage

### Add dictionary

If you want to add new rule to your dictionary, you can add new rule by following steps: 

Visit your [editor page](https://proofdict.mirror-kt.dev/editor):

- <https://proofdict.mirror-kt.dev/editor>

### Update dictionary

If you want to update the rule from your dictionary, you can edit it by following steps: 

1. Visit [_data/proofdict][]
2. Select the file for updating
3. Edit the file by click Edit this file icon

### Remove dictionary

If you want to remove unnecessary rule from your dictionary, you can remove it by following steps: 

1. Visit [_data/proofdict][]
2. Select the file for removing
3. Remove the file by click Delete this file icon

### Test dictionary

You can check your proof-dictionary is valid format.

Run following command in your local:

    yarn install
    yarn run test

[_data/proofdict]: _data/proofdict "dictionary data directory"