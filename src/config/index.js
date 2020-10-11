import config from 'react-global-configuration';
import prod from './prod';
import dev from './dev';

if (['localhost','newtest'].indexOf(window.location.hostname) > -1) {
    config.set(prod, {freeze: false});
    config.set(dev, {assign: true});
} else {
    config.set(prod);
}