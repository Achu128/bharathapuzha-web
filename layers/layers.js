var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Bharathapuzha_1 = new ol.format.GeoJSON();
var features_Bharathapuzha_1 = format_Bharathapuzha_1.readFeatures(json_Bharathapuzha_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bharathapuzha_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bharathapuzha_1.addFeatures(features_Bharathapuzha_1);
var lyr_Bharathapuzha_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bharathapuzha_1, 
                style: style_Bharathapuzha_1,
                popuplayertitle: 'Bharathapuzha',
                interactive: false,
                title: '<img src="styles/legend/Bharathapuzha_1.png" /> Bharathapuzha'
            });
var format_Geology_2 = new ol.format.GeoJSON();
var features_Geology_2 = format_Geology_2.readFeatures(json_Geology_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geology_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geology_2.addFeatures(features_Geology_2);
var lyr_Geology_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geology_2, 
                style: style_Geology_2,
                popuplayertitle: 'Geology',
                interactive: false,
                title: '<img src="styles/legend/Geology_2.png" /> Geology'
            });
var format_WATERBODYnew_3 = new ol.format.GeoJSON();
var features_WATERBODYnew_3 = format_WATERBODYnew_3.readFeatures(json_WATERBODYnew_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WATERBODYnew_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WATERBODYnew_3.addFeatures(features_WATERBODYnew_3);
var lyr_WATERBODYnew_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WATERBODYnew_3, 
                style: style_WATERBODYnew_3,
                popuplayertitle: 'WATER BODY new',
                interactive: false,
                title: '<img src="styles/legend/WATERBODYnew_3.png" /> WATER BODY new'
            });
var format_STREAMSnew_4 = new ol.format.GeoJSON();
var features_STREAMSnew_4 = format_STREAMSnew_4.readFeatures(json_STREAMSnew_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STREAMSnew_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STREAMSnew_4.addFeatures(features_STREAMSnew_4);
var lyr_STREAMSnew_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STREAMSnew_4, 
                style: style_STREAMSnew_4,
                popuplayertitle: 'STREAMS new',
                interactive: false,
                title: '<img src="styles/legend/STREAMSnew_4.png" /> STREAMS new'
            });
var format_Road_5 = new ol.format.GeoJSON();
var features_Road_5 = format_Road_5.readFeatures(json_Road_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_5.addFeatures(features_Road_5);
var lyr_Road_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_5, 
                style: style_Road_5,
                popuplayertitle: 'Road',
                interactive: false,
                title: '<img src="styles/legend/Road_5.png" /> Road'
            });
var format_CHECKDAMnew_6 = new ol.format.GeoJSON();
var features_CHECKDAMnew_6 = format_CHECKDAMnew_6.readFeatures(json_CHECKDAMnew_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHECKDAMnew_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHECKDAMnew_6.addFeatures(features_CHECKDAMnew_6);
var lyr_CHECKDAMnew_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHECKDAMnew_6, 
                style: style_CHECKDAMnew_6,
                popuplayertitle: 'CHECK DAM new',
                interactive: false,
                title: '<img src="styles/legend/CHECKDAMnew_6.png" /> CHECK DAM new'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Bharathapuzha_1.setVisible(true);lyr_Geology_2.setVisible(true);lyr_WATERBODYnew_3.setVisible(true);lyr_STREAMSnew_4.setVisible(true);lyr_Road_5.setVisible(true);lyr_CHECKDAMnew_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Bharathapuzha_1,lyr_Geology_2,lyr_WATERBODYnew_3,lyr_STREAMSnew_4,lyr_Road_5,lyr_CHECKDAMnew_6];
lyr_Bharathapuzha_1.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_Geology_2.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_WATERBODYnew_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_STREAMSnew_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ORDER1': 'ORDER1', 'Shape_Leng': 'Shape_Leng', 'LENGTH': 'LENGTH', });
lyr_Road_5.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_CHECKDAMnew_6.set('fieldAliases', {'Name': 'Name', 'name1': 'name1', 'Photo': 'Photo', });
lyr_Bharathapuzha_1.set('fieldImages', {'PERIMETER': 'TextEdit', 'KERWSDRP_': 'TextEdit', 'KERWSDRP_I': 'TextEdit', 'WSCODE': 'TextEdit', 'WSCODE1': 'TextEdit', 'NRIS': 'TextEdit', 'WSNAME': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Geology_2.set('fieldImages', {'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_WATERBODYnew_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_STREAMSnew_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'ORDER1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_Road_5.set('fieldImages', {'NAME': '', 'Length': '', });
lyr_CHECKDAMnew_6.set('fieldImages', {'Name': 'TextEdit', 'name1': 'TextEdit', 'Photo': 'TextEdit', });
lyr_Bharathapuzha_1.set('fieldLabels', {'PERIMETER': 'no label', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'no label', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'no label', 'AREA': 'no label', });
lyr_Geology_2.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_WATERBODYnew_3.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_STREAMSnew_4.set('fieldLabels', {'OBJECTID': 'no label', 'ORDER1': 'no label', 'Shape_Leng': 'no label', 'LENGTH': 'no label', });
lyr_Road_5.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_CHECKDAMnew_6.set('fieldLabels', {'Name': 'no label', 'name1': 'no label', 'Photo': 'no label', });
lyr_CHECKDAMnew_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});